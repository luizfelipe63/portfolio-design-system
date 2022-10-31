import { SVGAttributes } from "react"


interface Logoprops extends SVGAttributes<HTMLOrSVGElement> {

}

export function Logo(props: Logoprops) {
  return (
    <svg
      width={180}
      height={180}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0)" d="M0 0H180V180H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_1_38" transform="scale(.00049)" />
        </pattern>
        <image
          id="image0_1_38"
          width={2048}
          height={2048}
        />
      </defs>
    </svg>
  )
}
