import React from 'react';

type BannerPropType = {
    imageURL: string;
    title: string;
}
const Banner = (props: BannerPropType) => {
    const { imageURL, title } = props;
    return (
        <section className="w-full bg-center bg-no-repeat bg-cover h-[270px] md:h-[250px] sm:h-[200px] relative after:absolute after:bg-black after:opacity-50 after:top-0 after:left-0 after:w-full after:h-full" style={{
            backgroundImage: `url(${imageURL})`,
        }}>
            <div className="flex items-center h-full justify-center sm:w-[250px] sm:m-auto">
                <div className="">
                    <h2 className="text-2xl sm:text-xl text-center text-white z-30 relative">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Banner;