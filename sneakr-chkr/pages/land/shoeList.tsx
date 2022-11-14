import Shoe from './shoe';
import IShoe from './shoe';
import { IShoeModel } from '../../models/shoe';

export interface IShoesListProps {
    shoesArr: Array<IShoeModel>;
}

export default function ShoeList(shoeList: IShoesListProps) {
    return (
        <div className="shoe-list-primary">

            {
                shoeList.shoesArr.map(
                    (singleShoe) => (
                        <Shoe 
                            brand={singleShoe.brand}
                            img={singleShoe.img}
                            description={singleShoe.description}
                            price={singleShoe.price}

                            //8======================D~~~~~~~~ ():
                        />
                    )
                )
            }
        </div>
    );
}