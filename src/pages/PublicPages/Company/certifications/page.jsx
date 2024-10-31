import React, { useState } from 'react';
import Modal from '@/components/formModal/ImageModal';
import { Container } from '@/components/container/Container';

const certificates = [
  {
    id: 1,
    title: 'NAFDAC CERTIFICATE',
    src: '/assets/wallets.png'
  },
  {
    id: 2,
    title: 'ISO 9001 CERTIFICATE',
    src: '/assets/wallets.png'
  },
  {
    id: 3,
    title: 'FDA CERTIFICATE',
    src: '/assets/wallets.png'
  }

  // Add more certificates as needed
];

const CertificatesGallery = () => {
  // const companyDetails = useCompany();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleImageClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="">
      <Container>
        <div className="w-full mb-10">
          <h1 className="text-xl font-semibold capitalize my-5 text-center">CERTIFICATIONS</h1>

          <div className=" flex flex-col lg:flex-row gap-4 items-start">
            {/* LEFT */}

            <div className=" hidden lg:block w-full flex-1 bg-white rounded-lg p-4 hover:shadow-2xl lg:sticky top-36">
              <h1 className="font-bold text-md capitalize mb-4">Certificates</h1>
              <ul className="ps-4 text-xs">
                <li className="mb-1 py-1">NAFDAC CERTIFICATE</li>
                <li className="mb-1 py-1">NAFDAC CERTIFICATE</li>
                <li className="mb-1 py-1">NAFDAC CERTIFICATE</li>
                <li className="mb-1 py-1">NAFDAC CERTIFICATE</li>
                <li className="mb-1 py-1">NAFDAC CERTIFICATE</li>
              </ul>
            </div>

            {/* RIGHT */}

            <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-white p-4 rounded-lg hover:shadow-xl cursor-pointer h-[400px]"
                  onClick={() => handleImageClick(certificate)} // Pass clicked certificate data
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <img
                        src={certificate.src}
                        width={100}
                        height={100}
                        alt={certificate.title}
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                    <p className="text-center text-dark-gray font-bold">{certificate.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for Enlarged Image */}
            {selectedCertificate && (
              <Modal onClose={handleCloseModal}>
                <img
                  src={selectedCertificate.src}
                  width={400}
                  height={400}
                  alt={selectedCertificate.title}
                  className="w-full h-auto object-cover"
                />
                <p className="text-center text-dark-gray font-bold mt-4">
                  {selectedCertificate.title}
                </p>
              </Modal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CertificatesGallery;
