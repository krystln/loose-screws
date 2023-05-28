import Image from 'next/image'
import AddItem from './AddItem'

const ProdCard = (props) => {
    return (
        <div className='rounded-md border-2 border-slate-300 flex p-2 w-96 h-32'>
            <Image src={props.img}
                alt={props.alt}
                width={100}
                height={100}
                className='object-contain'
            />
            <div className='w-full'>
                <h4 className='text-xl font-bold text-center'>{props.name}</h4>
                <p className='text-m text-slate-600 text-right mr-4'>{props.price}</p>
                <br />
                <AddItem></AddItem>
            </div>

        </div>
    )
}

export default ProdCard