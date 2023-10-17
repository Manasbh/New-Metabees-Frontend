import { useState } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import './Upload.css'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const file = document.getElementById('fileInput')
  const { userInfo } = useSelector((state) => state.auth)
  const userId = userInfo._id

  const handleFileUpload = (event) => {
    event.preventDefault()
    if (!selectedFile) {
      alert('Please select a file to upload.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    Axios.post('https://web-production-5ee8.up.railway.app/api/new')
      .then((res) => {
        console.log(res)
        alert('File uploaded successfully.')
        file.value = ''
        setSelectedFile(null)
      })
      .catch((err) => {
        console.log(err)
        alert('File upload failed.')
      })
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
