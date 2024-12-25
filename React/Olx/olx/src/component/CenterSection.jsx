import React from 'react'

export default function CenterSection() {
  return (
    <div className="container mx-auto py-8">
  <h1 className="text-3xl font-semibold font-serif text-center text-teal-600 mb-8">
    Categories
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Mobile icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/yJeVW9rIfvuoBUy9YnhfcByEhSm7z3bcbOaqpoiXeufG69xfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Mobile</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Vehicle icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/fDKWRQ485TyiUyfMwoP8hGLNMnMgqRZro1GvAeNqCeHS9exfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Vehicle</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Bike icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/lcJMu4YNRP49GVaIeJv1Neg8eubu2bLo1Xggb7OInhsWeexfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Bike</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Furniture icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/pbOJCciQ4e0FLyj3w1bsZKcAfPO4UxlP4tiUPfQe3hve69xfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Furniture</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Electronics icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/q0pDVQz1ZmavC5vEeLock7QLLBPOFcQDShLcJYk4BVyn3HfTA.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Electronics</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Home Appliance icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/1FEl8KnfChzNXamf2aOb8jBfPMIW93HCysrm2bCxp5wkeexfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Home Appliance</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Fashion icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/uFIeIf3J5Kk3JkfYYlOeioHNfuO4WDJUz84eEa0DhdOi17jfJA.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Fashion</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        alt="Animals icon"
        className="mx-auto mb-4"
        height={100}
        src="https://storage.googleapis.com/a1aa/image/Bf2zI7h3KeuB4E3ON9GIaIN0I90NLjRDcAfnkc6s5eV18exfE.jpg"
        width={100}
      />
      <p className="text-lg font-medium">Animals</p>
    </div>
  </div>
</div>
  )
}
