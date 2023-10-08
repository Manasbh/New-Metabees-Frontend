import { useState } from 'react'
import Axios from 'axios'
import { getCookieByName } from '../../utils/getCookie'
import { useUser } from '../../utils/UserContext'
import './Upload.css'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const file = document.getElementById('fileInput')
  const token = getCookieByName('aToken')

  const { user } = useUser()

  const handleFileUpload = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    Axios.post(
      'https://web-production-5ee8.up.railway.app/new',
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        alert('File uploaded successfully.');
        file.value = '';
        setSelectedFile(null);
  
       
        Axios.post(
          'API_ENDPOINT', 
          {
            stage: 'uip',
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
          .then((response) => {
            // Handle successful update of the 'stage'
            console.log('Stage updated to uip.');
          })
          .catch((error) => {
            // Handle error in updating 'stage'
            console.log('Error updating stage:', error);
          });
      })
      .catch((error) => {
        alert('File upload failed.');
        console.log(error);
      });
  };

  if (!user) {
    window.location.href = '/login'
  }

  return (
    <div className="upload-bg">
      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-col items-center justify-center gap-2 bg-purple-950 bg-opacity-60 rounded-lg p-6 shadow-xl text-white w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-4 upload-h2">
            Upload Your 3D Model
          </h2>
          <form
            onSubmit={handleFileUpload}
            className="flex flex-col items-center justify-center gap-5"
          >
            <label htmlFor="fileInput" className="upload-btn bg-[#000000]">
              {selectedFile ? 'File Selected' : 'Select File'}
              <input
                type="file"
                accept=".glb,.gltf,.glb-binary,.gltf+json"
                id="fileInput"
                className="hidden"
                onChange={(event) => {
                  setSelectedFile(event.target.files[0])
                }}
              />
            </label>
            {selectedFile && (
              <div>
                <p>{selectedFile.name}</p>
              </div>
            )}
            <button type="submit" className="upload-btn bg-[#170055]">
              Upload File
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upload
