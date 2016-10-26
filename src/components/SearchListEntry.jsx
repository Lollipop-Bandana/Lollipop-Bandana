const imageStyles = {
  height: 'auto',
  width: 'auto',
  maxHeight: '200px',
  maxWidth: '200px',
  border: '0',
  align: 'left'
}; 

const SearchListEntry = () => (
  <div className="search-container" style={searchStyles}>
    <h3>Results</h3>
    <div style={{width: '90%', margin: '0 auto', border: 'solid 1px black'}}>
      <img style={imageStyles} src="http://www.freeiconspng.com/uploads/male-icon-4.jpg" />
      <p className="user-info" style={{float: 'right'}}>
        Name: Bob<br />
        Compatibility: 80%
      </p>
    </div>
  </div>
)

window.SearchListEntry = SearchListEntry;