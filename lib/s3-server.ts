import fs from 'fs';
import path from 'path';
import AWS from 'aws-sdk';
import { tmpdir } from 'os';

export const downloadFromS3 = async (file_key: string) => {
    try {
    
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
        });

        const s3 = new AWS.S3({
            region: 'eu-north-1',
        });

        const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
        if (!bucketName) {
            throw new Error('Bucket name is not defined');
        }

        const params = {
            Bucket: bucketName,
            Key: file_key,
        };

        const obj = await s3.getObject(params).promise();

        
        const tempDir = path.join(tmpdir(), 'chatsphere');
        const fileName = path.join(tempDir, `pdf-${Date.now()}.pdf`);

        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        console.log('File path:', fileName);

      
        fs.writeFileSync(fileName, obj.Body as Buffer);

        return fileName;
    } catch (error) {
        console.error('Error downloading from S3:', error);
        throw error; 
    }
};
