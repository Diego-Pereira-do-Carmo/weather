import React from 'react';
import{FcInfo} from 'react-icons/fc';

export default function InfoCard() {
  return (
    <div className="flex justify-center font-semibold text-xl">
      <FcInfo  className="text-3xl"/>
      <p className="text-slate-600">Type the Name of Some City</p>
    </div>
  );
}
