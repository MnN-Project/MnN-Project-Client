'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FormModal from '@/components/formModal/FormModal';
import NextTable from '@/components/nextTable/NextTable';
import apiClient from '@/api/apiClients';
import { endpoints } from '@/api/endpoints';
import { dateFormatter } from '@/utils/errorFormatter';

const columns = [
  {
    header: 'S/No',
    accessor: 'no',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Images',
    accessor: 'info'
  },
  {
    header: 'Title',
    accessor: 'title',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Category',
    accessor: 'category',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Total Slides',
    accessor: 'slides',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Created At',
    accessor: 'date',
    className: 'hidden lg:table-cell'
  },
  {
    header: 'Actions',
    accessor: 'actions'
  }
];

const SliderManagerPage = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      const response = await apiClient.get(endpoints.getAllSliders);

      setSliders(response.data);
    };

    fetchSliders();
  }, []);

  const renderRow = (item, i) => {
    return (
      <tr key={item.id} className="text-sm ">
        <td className="hidden md:table-cell">{i + 1}</td>
        <td className="flex items-center gap-4 pb-2">
          <Image
            src={item.images[0].url}
            alt="Sliders"
            width={40}
            height={40}
            priority="true"
            title="Slider Images Compressed"
            className="md:hidden xl:block w-20 h-20 rounded-sm object-cover cursor-pointer"
          />
        </td>
        <td className="hidden md:table-cell capitalize">{item.title}</td>
        <td className="hidden md:table-cell capitalize">{item.categoryId.name}</td>
        <td className="hidden md:table-cell capitalize">{item.images.length}</td>
        <td className="hidden md:table-cell capitalize">{dateFormatter(item.createdAt)}</td>
        <td>
          <div className="flex items-center gap-2">
            <FormModal table="slider" type="update" id={item.id} data={item} />
            <FormModal table="slider" type="delete" id={item._id} />
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white rounded-md flex-1">
      {/* Top */}
      <div className="p-4 bg-light-green rounded-t-md">
        <div className="flex items-center justify-between relative">
          <h1 className="text-lg font-semibold text-white ">All Sliders</h1>
          <FormModal table="slider" type="create" />
        </div>
      </div>

      <div className="p-4">
        <NextTable columns={columns} renderRow={renderRow} data={sliders} />
      </div>
    </div>
  );
};

export default SliderManagerPage;
