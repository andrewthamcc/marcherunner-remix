const Checkmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none" fill-rule="evenodd">
        <circle cx="9" cy="9" r="9" fill="#18bc33" />
        <g fill="#FFF" transform="rotate(45 .97 13.962)">
          <rect width="2" height="8" x="3" rx=".5" />
          <rect
            width="2"
            height="5"
            x="1.5"
            y="4.5"
            rx=".5"
            transform="rotate(90 2.5 7)"
          />
        </g>
      </g>
    </svg>
  )
}

export default Checkmark
