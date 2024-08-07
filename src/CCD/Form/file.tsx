import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./file.scss";
import { FormHelperText } from '@mui/material';

type Props = {
  upload_url: string;
  label: string;
  name:string;
  onChange: (name:string, file: string) => void;
  formik_error?: string | false;
}

function InputFileUpload(props: Readonly<Props>) {
  const [uploading, setUploading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [uploadPercentage, setUploadPercentage] = React.useState<number>(0);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setUploading(true);
      setError(null);
      setSuccess(null);
      setUploadPercentage(0);

      await uploadFile(props.upload_url, formData, (percentage) => {
        setUploadPercentage(percentage);
      }).then(response => {
        setSuccess('Uploaded successfully!');
        const responseJson = JSON.parse(response as string);
        console.log('Upload successful:', responseJson);
        if((responseJson as { file_URL?: string })?.file_URL ){
          props.onChange(props.name, (responseJson as { file_URL: string }).file_URL);
        }
      }).catch(error => {
        setError('Upload failed');
        console.error('Upload failed:', error);
      }).finally(() => {
        setUploading(false);
      });
    }
  };

  const uploadFile = (uploadUrl: string, formData: FormData, onProgress: (percentage: number) => void) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.open('POST', `${uploadUrl}/file/upload`, true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          onProgress(percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Upload failed with status: ${xhr.status}`));
        }
      };

      xhr.onerror = () => reject(new Error('Upload failed due to a network error'));

      xhr.send(formData);
    });
  };

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        className='upload-button'
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'CLICK HERE'}
        <input
          type="file"
          name={props.name}
          hidden
          onChange={handleFileChange}
          className='visually-hidden-input'
        />
      </Button>
      {uploading && <FormHelperText> {uploadPercentage.toFixed(2)}% </FormHelperText>}
      {error||props.formik_error && <FormHelperText error>{error??props.formik_error}</FormHelperText>}
      {success && <FormHelperText >{success}</FormHelperText>}

    </div>
  );
}

export default InputFileUpload;