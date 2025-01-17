import AWS from "aws-sdk"

export async function uploadFileToS3(file: File) {
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
          
         const file_key =
         "uploads/" + Date.now().toString() + file.name.replace(" ", "-");

         const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
         if (!bucketName) {
             throw new Error("Bucket name is not defined");
         }

         const params = {
            Bucket: bucketName,
             Key: file_key,
             Body: file
         }

         const upload = s3.putObject(params).on('httpUploadProgress', evt => {
            console.log('uploading to s3....',parseInt(((evt.loaded*100)/evt.total).toFixed(2)) + '%')
         }).promise();
          
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         await upload.then((data) => {
                console.log(' successfully uploaded to s3',file_key)
         } )
         return Promise.resolve({
            file_key,
            file_name:file.name
         })
            
     } catch (error) {
        console.log('error uploading to s3',error)
     }
}

export function getS3Url(file_key: string) {
     const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.eu-north-1.amazonaws.com/${file_key}`;
        return url;
}