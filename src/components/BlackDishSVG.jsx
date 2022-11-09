const BlackDishSVG = () => {
  return (
    <svg viewBox='0 0 245 176'>
      <defs></defs>
      <path
        fill='#12161E'
        fill-rule='evenodd'
        d='M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#fff'
        fillOpacity='.2'
        fill-rule='evenodd'
        d='M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80zM.085 77A53.221 53.221 0 000 80v-3h.085zm244.83 0H245v3c0-1.004-.028-2.004-.085-3z'
        clipRule='evenodd'
      ></path>
      <path
        fill='url(#stack-fed__paint0_linear)'
        fillOpacity='.2'
        fill-rule='evenodd'
        d='M122.5 160c67.655 0 122.5-35.817 122.5-80v1c0 44.183-54.845 80-122.5 80S0 125.183 0 81v-1c0 44.183 54.845 80 122.5 80zM.085 77A53.221 53.221 0 000 80v-3h.085zm244.83 0H245v3c0-1.004-.028-2.004-.085-3z'
        clipRule='evenodd'
      ></path>
      <path
        fill='url(#stack-fed__paint1_linear)'
        fill-rule='evenodd'
        d='M122.5 160c67.655 0 122.5-35.817 122.5-80v16c0 44.183-54.845 80-122.5 80S0 140.183 0 96V80c0 44.183 54.845 80 122.5 80z'
        clipRule='evenodd'
        opacity='.3'
      ></path>
      <g filter='url(#stack-fed__filter0_i)'>
        <path
          fill='#12161E'
          d='M245 80c0 44.183-54.845 80-122.5 80S0 124.183 0 80 54.845 0 122.5 0 245 35.817 245 80z'
        ></path>
      </g>
      <defs>
        <linearGradient
          id='stack-fed__paint0_linear'
          x1='246.095'
          x2='0'
          y1='165.729'
          y2='165.729'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' stopOpacity='0'></stop>
          <stop offset='.681' stopColor='#fff'></stop>
          <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
        </linearGradient>
        <linearGradient
          id='stack-fed__paint1_linear'
          x1='156.393'
          x2='20.833'
          y1='77.608'
          y2='77.608'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' stopOpacity='0'></stop>
          <stop offset='.589' stopColor='#fff'></stop>
          <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
        </linearGradient>
        <filter
          id='stack-fed__filter0_i'
          width='245'
          height='160'
          x='0'
          y='0'
          color-interpolation-filters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation='16.154'></feGaussianBlur>
          <feComposite
            in2='hardAlpha'
            k2='-1'
            k3='1'
            operator='arithmetic'
          ></feComposite>
          <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0'></feColorMatrix>
          <feBlend in2='shape' result='effect1_innerShadow'></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default BlackDishSVG
