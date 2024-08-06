const mdxComponents = {
  h1: props => (
    <h1 {...props} className='text-red-400'>
      {props.children}
    </h1>
  ),
}
export { mdxComponents }
