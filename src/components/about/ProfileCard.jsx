import React from 'react'

export const ProfileCard = ({ title, imgSrc, skill, CV,pdfName}) => {
    // const downloadPDF = () => {
    //     const links = document.createElement('a');
    //     ink.href = {`${CV}`}; // Replace with the actual path to your PDF file
    //     links.download = {pdfName}; // You can specify the desired filename here
    //     document.body.appendChild(links);
    //     links.click();
    //     document.body.removeChild(links);
    //   };

    const openGmail = ({gmail}) => {
        window.location.href = `mailto:${gmail}`;
      };
    return (
        <div>
            <div className="w-[250px] max-w-sm bg-white/60 border border-gray-300 rounded-lg shadow-md">

                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg mt-2 object-cover"
                        src={imgSrc} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{title}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href={CV} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-600 rounded-lg hover:bg-rose-500 transition-all" target='_blank' download={CV}>Download CV</a>
                        <links to="#" onClick={openGmail} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 " >Contact</links>
                    </div>
                </div>
            </div>
        </div>
    )
}
