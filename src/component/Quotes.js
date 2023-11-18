import './Quote.css'

const Quotes = ({content, author}) => {
  return(
    <div className="text-card">
          <div className='overlay'>
            <div className='one'> Quote of the day</div>
            <div className='two'>{content}</div>
            <div className='three'>~{author}~</div>
          </div>      
    </div>
  )
} 

export default Quotes;