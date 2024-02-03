import './index.css'
import {BsFilterRight} from 'react-icons/bs'

const ProductsHeader = props => {
  const {sortbyOptions, activeOptionId, updateActiveOptionId} = props

  //  on change option in drop down select method
  const onChangeSortby = event => {
    // this callback func will be called based on drop down selection
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon " />
        <h1 className="sort-by">Sort by</h1>
        <select
          className="sort-by-select"
          //  currently selected option
          value={activeOptionId}
          //  on select another option
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
