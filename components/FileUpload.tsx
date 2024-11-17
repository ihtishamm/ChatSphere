'use client'
import { uploadFileToS3 } from '@/lib/s3';
import { Inbox } from 'lucide-react';
import React from 'react'
import { useDropzone } from 'react-dropzone'

const FileUpload = () => {
    const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      if(file.size > 10 * 1024 * 1024){
        alert('File size should be less than 10MB');
        return;
      }

      // upload to s3
    try {
      const data = await uploadFileToS3(file);
      console.log('data',data);
    } catch (error) {
      console.log('error uploading to s3',error);
      
    }
    }

    });
  return (
      <div className='p-2 bg-white rounded-xl'>
       <div
        {...getRootProps({
            className:"border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col"
        })}>
        <input {...getInputProps()} />
        <>
        <Inbox className="w-12 h-12 text-gray-400"/>
        <p className="text-gray-400">drop some files here, or click to select files</p>
        </>
       </div>
      </div>
  )
}

export default FileUpload