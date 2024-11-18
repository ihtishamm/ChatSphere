import fs from 'fs';
import path from 'path';
import AWS from 'aws-sdk';


export const downloadFromS3 = async (file_key: string) => {

    try {

        AWS.config.update({
           accessKeyId:process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
           secretAccessKey:process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
        });
        const s3 = new AWS.S3({
         params:{
               Bucket:process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
         },
         region:'eu-north-1',
        });
         
        const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
        if (!bucketName) {
            throw new Error("Bucket name is not defined");
        }

        const params = {
           Bucket: bucketName,
            Key: file_key
        }
        const obj = await s3.getObject(params).promise();
    const tempDir = path.join('C:', 'temp');
    const fileName = path.join(tempDir, `pdf-${Date.now()}.pdf`);

    // Ensure the temp directory  exists
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
    }

    console.log('file_name', fileName);
    fs.writeFileSync(fileName, obj.Body as Buffer);
    return fileName; 

      
           
    } catch (error) {
       console.log('error uploading to s3',error)
    }
    
};