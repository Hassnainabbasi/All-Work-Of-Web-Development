import React, { useState } from 'react';
import { Button, MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment } from '@mui/material';

export default function PostAdForm() {
  const [adTitle, setAdTitle] = useState('');
  const [category, setCategory] = useState('');
  const [adPrice, setAdPrice] = useState('');
  const [adModel, setAdModel] = useState('');
  const [adYear, setAdYear] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      adTitle,
      category,
      adPrice,
      adModel,
      adYear,
      adDescription,
      photo
    });
  };

  return (
   
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Post Your Ad</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <TextField
              label="Ad Title *"
              variant="outlined"
              fullWidth
              required
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              placeholder="Enter Ad Title"
            />
          </div>

          <div className="mb-6">
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Category *</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category *"
              >
                <MenuItem value="">-- Select Category --</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
                <MenuItem value="real-estate">Real Estate</MenuItem>
                <MenuItem value="vehicles">Vehicles</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Price *"
              variant="outlined"
              fullWidth
              required
              value={adPrice}
              onChange={(e) => setAdPrice(e.target.value)}
              placeholder="Enter Ad Price"
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Model *"
              variant="outlined"
              fullWidth
              required
              value={adModel}
              onChange={(e) => setAdModel(e.target.value)}
              placeholder="Enter Ad Model"
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Year *"
              variant="outlined"
              fullWidth
              required
              value={adYear}
              onChange={(e) => setAdYear(e.target.value)}
              placeholder="Enter Ad Year"
              type="number"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-5">
              <Button
                variant="contained"
                component="label"
                color="primary"
                className="mr-4"
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Button>
              <span>{photo ? photo.name : '   No file chosen'}</span>
            </div>
          </div>

          <div className="mb-6">
            <TextField
              label="Ad Description *"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
              placeholder="Include Brands, Model, Age and Included Accessories"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="w-full py-3"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
   
);
}
