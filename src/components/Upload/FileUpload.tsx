import React, { useState } from 'react';

const FileUploadForm = () => {
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [deathDate, setDeathDate] = useState('');
  const [relationship, setRelationship] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('name', name);
    formData.append('keywords', keywords);
    formData.append('birthdate', birthdate);
    formData.append('deathDate', deathDate);
    formData.append('relationship', relationship);

    // 여러 파일을 FormData에 추가
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    // 예시로 Fetch API를 통해 서버에 데이터를 POST로 전송
    try {
      const response = await fetch('https://your-api-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);

      // 미리보기 URL 생성
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  return (
    <div>
      <div className='text-white'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Keywords:</label>
            <div>
              <label htmlFor='smile'>
                <input
                  type='radio'
                  id='smile'
                  name='keywords'
                  value='smile'
                  checked={keywords === 'smile'}
                  onChange={(e) => setKeywords(e.target.value)}
                />
                Smile
              </label>
            </div>
            <div>
              <label htmlFor='talking'>
                <input
                  type='radio'
                  id='talking'
                  name='keywords'
                  value='talking'
                  checked={keywords === 'talking'}
                  onChange={(e) => setKeywords(e.target.value)}
                />
                Talking
              </label>
            </div>
          </div>

          <div>
            <label htmlFor='birthdate'>Birthdate:</label>
            <input
              type='date'
              id='birthdate'
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='deathDate'>Memorial Date:</label>
            <input
              type='date'
              id='deathDate'
              value={deathDate}
              onChange={(e) => setDeathDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='relationship'>Relationship:</label>
            <input
              type='text'
              id='relationship'
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='file'>Upload files:</label>
            <input
              type='file'
              id='file'
              accept='image/*'
              multiple // 여러 파일을 선택할 수 있도록 multiple 속성 추가
              onChange={handleFileChange}
            />
          </div>

          {/* 미리보기 섹션 */}
          <div>
            <h3>Selected Images Preview:</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {previewUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </div>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FileUploadForm;
