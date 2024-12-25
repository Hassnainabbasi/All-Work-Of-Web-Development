import React, { useState } from 'react';
import { Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const HeroSection = () => {
  const [category, setCategory] = useState('category'); // Default category state

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section 
      className="relative w-full h-[70vh] bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ_DkkICcxMnr-J9TESyTDOdC7y6eV_xfVg&s)' }}>
      
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative z-10 flex justify-center items-center w-full h-full text-white px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Olx is The Largest MarketPlace of Pakistan's</h2>
          <h3 className="text-lg md:text-xl mb-8">A Budget Tells Us What We Can't Afford, But It Doesn't Keep Us From Buying it.</h3>

          <form className="flex justify-center gap-4 items-center">
            <div>
              <input 
                type="text" 
                placeholder="Search for items..." 
                className="px-4 py-4 w-64 rounded-xl border-2 border-white text-black outline-none"
              />
            </div>

            <div>
              <FormControl className="w-64 rounded-full border-2 border-white">
                {/* <InputLabel style={{color : "white", borderColor : "white"}}>Category</InputLabel> */}
                <Select
                  label="Category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="rounded-full text-white bg-white"
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: 'black',
                        color: 'white',
                      },
                    },
                  }}
                >
                  <MenuItem value="category" disabled className="text-white">Category</MenuItem>
                  <MenuItem value="electronics" className={category === 'electronics' ? 'text-white' : 'text-black'}>
                    Electronics
                  </MenuItem>
                  <MenuItem value="fashion" className={category === 'fashion' ? 'text-white' : 'text-black'}>
                    Fashion
                  </MenuItem>
                  <MenuItem value="real-estate" className={category === 'real-estate' ? 'text-white' : 'text-black'}>
                    Real Estate
                  </MenuItem>
                  <MenuItem value="vehicles" className={category === 'vehicles' ? 'text-white' : 'text-black'}>
                    Vehicles
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                className="text-white bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
