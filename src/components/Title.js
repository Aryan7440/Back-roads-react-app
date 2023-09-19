const Title = (props) => {
  return (
    <h1 className="section-header">
      {props.title} <span>{props.subTitle}</span>
    </h1>
  )
}

export default Title
