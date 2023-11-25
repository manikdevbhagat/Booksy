import { Book } from '../../types'
import { Link } from 'react-router-dom'

const BookCard = ({book}:{book: Book}) => {
  return (
    <div className='w-[220px] flex flex-col gap-4 p-4 bg-gray-100 rounded-xl shadow-lg items-center'>
      <Link to={book.id.toString()}>
      <img src={book.image} alt={book.title} className='w-[150px] h-[200px]'/>
      </Link>
      <p className='font-semibold text-lg max-w-[220px] h-[35px] text-center leading-4 overflow-hidden'>{book.title}</p>
      <p className='text-textColor'>{book.author}</p>
      <p className='text-red-600'>₹ {book.price}</p>
    </div>
  )
}

export default BookCard