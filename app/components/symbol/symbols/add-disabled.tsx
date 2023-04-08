const AddDisabled = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="9" cy="9" r="9" fill="#c0c0c0" />
        <rect
          width="8"
          height="2"
          x="5"
          y="8"
          fill="#fff"
          fill-rule="nonzero"
          rx=".5"
        />
        <rect
          width="8"
          height="2"
          x="5"
          y="8"
          fill="#fff"
          fill-rule="nonzero"
          rx=".5"
          transform="rotate(90 9 9)"
        />
      </g>
    </svg>
  )
}

export default AddDisabled
