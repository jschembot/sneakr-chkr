import Link from 'next/link';
import Image from 'next/image';

export interface IShoe {
    brand: string;
    subType?: string;
    img: string;
    price: Array<number>;
    description: string;
    [index: number]: string;
}

export default function Shoe (shoe: IShoe) {
    return(
        <>
            <div className='shoe_img'>
                <Image 
                    src={shoe.img}
                    alt={''}
                    height={60}
                    width={60}
                />
            </div>
            <div className='shoe_brand'>
                {shoe.brand}&nbsp;
                {
                    shoe.subType &&
                    shoe.subType
                }
            </div>
            <div className='shoe_description'>
                {shoe.description}
            </div>
            <div className='shoe_price'>
                ${shoe.price}
            </div>
        </>
    );
};