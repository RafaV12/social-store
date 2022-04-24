import React, { useState } from 'react';

function AccountForm() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [values, setValues] = useState({
    title: '',
    description: '',
    price: '',
    category: 'Other',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const previewFile = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
      reader.onerror = () => {
        console.error('Cannot read image file');
      };
    } else {
      setPreviewSource('');
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const uploadImage = async () => {
    console.log('Uploaded');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error('Something went wrong');
    };
    setValues({
      title: '', description: '', price: '', category: '',
    });
  };
  return (
    <div>
      <form className="mt-14 flex flex-col items-center" onSubmit={onSubmit}>
        <label htmlFor="image" className="mb-3">
          <b>Account image</b>
        </label>
        {previewSource && (
        <img src={previewSource} alt="" className="mb-7 h-56 w-56" />
        )}
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInput}
          value={fileInputState}
          className="mb-3 h-10"
          required
        />
        <label htmlFor="title">
          <b>Account name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Account name"
          name="title"
          value={values.title}
          onChange={handleChange}
          className="pl-4 mb-7 h-10 w-full rounded-lg"
          required
        />

        <label htmlFor="category">
          <b>Account category</b>
        </label>
        <select
          onChange={handleChange}
          name="category"
          className="pl-4 mb-7 h-10 w-full rounded-lg"
        >
          <option value="Other">Select Account category</option>
          <option value="Tech">Tech</option>
          <option value="Memes">Memes</option>
          <option value="Food">Food</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="description">
          <b>Account description</b>
        </label>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
          className="pl-4 mb-7 h-10 w-full rounded-lg"
          placeholder="Enter Account description"
          required
        />
        <label htmlFor="price">
          <b>Account price</b>
        </label>
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleChange}
          className="pl-4 mb-9 h-10 w-full rounded-lg"
          placeholder="Enter Account price"
          required
        />
        <button
          type="submit"
          className="w-40 text-white bg-purple-500 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default AccountForm;
