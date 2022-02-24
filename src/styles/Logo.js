import { Theme } from './Theme';

export const Logo = ({ height }) => {
  const width = height * 6.3;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 391 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor={Theme.primary[500]}>
            <animate
              attributeName="stop-color"
              values={`${Theme.primary[500]}; ${Theme.highlight[500]}; ${Theme.primary[500]}`}
              dur="8s"
              repeatCount="indefinite"
            ></animate>
          </stop>

          <stop offset="100%" stopColor={Theme.highlight[500]}>
            <animate
              attributeName="stop-color"
              values={`${Theme.highlight[500]}; ${Theme.primary[500]}; ${Theme.highlight[500]}`}
              dur="8s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
      <g fill="url(#logo-gradient)">
        <path d="M0.5 54.4V14.5C0.5 5.16667 6.13333 0.5 17.4 0.5C28.6667 0.5 34.3 5.16667 34.3 14.5V21H27.3V14.1C27.3 9.03333 24 6.5 17.4 6.5C10.8 6.5 7.5 9.03333 7.5 14.1V32.1C9.76667 29.7 13.4 28.5 18.4 28.5C23.4 28.5 27.3333 29.7333 30.2 32.2C33.0667 34.6 34.5 38.0333 34.5 42.5V54.5C34.5 58.9667 33.0667 62.4333 30.2 64.9C27.4 67.3 23.1667 68.5 17.5 68.5C11.9 68.5 7.66667 67.3 4.8 64.9C1.93333 62.4333 0.5 58.9667 0.5 54.5L0.6 54.4H0.5ZM7.5 54.5C7.5 59.8333 10.8333 62.5 17.5 62.5C24.1667 62.5 27.5 59.8333 27.5 54.5V42.5C27.5 37.1667 24.2333 34.5 17.7 34.5C11.2333 34.5 7.83333 36.9333 7.5 41.8V54.5Z" />
        <path d="M59.9766 67H52.9766V2H55.9766L58.4766 8.4C59.8766 6 61.7099 4.1 63.9766 2.7C66.2432 1.23333 68.7099 0.5 71.3766 0.5C78.1099 0.5 82.4099 2.93333 84.2766 7.8C87.4766 2.93333 91.6766 0.5 96.8766 0.5C106.277 0.5 110.977 5.16667 110.977 14.5V67H103.977V14.5C103.977 9.16667 101.577 6.5 96.7766 6.5C93.9766 6.5 91.3766 7.63333 88.9766 9.9C86.6432 12.1667 85.4766 14.3667 85.4766 16.5V67H78.4766V14.5C78.4766 9.16667 76.0766 6.5 71.2766 6.5C68.4766 6.5 65.8766 7.6 63.4766 9.8C61.1432 11.9333 59.9766 14.0667 59.9766 16.2V67Z" />
        <path d="M128.93 54.5V2H135.93V54.5C135.93 57.0333 136.463 59 137.53 60.4C138.663 61.8 140.696 62.5 143.63 62.5C146.563 62.5 149.263 61.3667 151.73 59.1C154.196 56.8333 155.43 54.6333 155.43 52.5V2H162.43V67H159.43L156.83 60.6C155.363 63 153.463 64.9333 151.13 66.4C148.863 67.8 146.363 68.5 143.63 68.5C133.83 68.5 128.93 63.8333 128.93 54.5Z" />
        <path d="M214.269 54.5C214.269 63.8333 208.635 68.5 197.369 68.5C186.102 68.5 180.469 63.8333 180.469 54.5V46H187.469V54.9C187.469 57.3 188.302 59.1667 189.969 60.5C191.635 61.8333 194.102 62.5 197.369 62.5C200.635 62.5 203.102 61.8333 204.769 60.5C206.435 59.1667 207.269 57.3667 207.269 55.1C207.269 52.7667 207.002 50.9333 206.469 49.6C206.002 48.2 205.002 46.7333 203.469 45.2L185.869 28C183.802 25.9333 182.369 23.9333 181.569 22C180.835 20 180.469 17.5 180.469 14.5C180.469 10.0333 181.835 6.6 184.569 4.2C187.369 1.73333 191.569 0.5 197.169 0.5C207.902 0.5 213.269 5.16667 213.269 14.5V23H206.269V14.1C206.269 11.7 205.469 9.83333 203.869 8.5C202.335 7.16667 200.002 6.5 196.869 6.5C193.735 6.5 191.369 7.16667 189.769 8.5C188.235 9.83333 187.469 11.6667 187.469 14C187.469 16.3333 187.702 18.1667 188.169 19.5C188.635 20.8333 189.669 22.2333 191.269 23.7L209.169 40.9C211.102 43.0333 212.435 45.1 213.169 47.1C213.902 49.0333 214.269 51.5 214.269 54.5Z" />
        <path d="M239.273 67H232.273V2H239.273V67Z" />
        <path d="M283.727 54.5V49H290.727V54.5C290.727 58.9667 289.36 62.4333 286.627 64.9C283.893 67.3 279.793 68.5 274.327 68.5C268.86 68.5 264.727 67.3 261.927 64.9C259.127 62.4333 257.727 58.9667 257.727 54.5V14.5C257.727 10.0333 259.093 6.6 261.827 4.2C264.56 1.73333 268.66 0.5 274.127 0.5C279.593 0.5 283.727 1.73333 286.527 4.2C289.327 6.6 290.727 10.0333 290.727 14.5V24H283.727V14.5C283.727 9.16667 280.56 6.5 274.227 6.5C267.893 6.5 264.727 9.16667 264.727 14.5V54.5C264.727 59.8333 267.893 62.5 274.227 62.5C280.56 62.5 283.727 59.8333 283.727 54.5Z" />
        <path d="M339.25 67H336.25L333.65 60.6C332.25 63 330.417 64.9333 328.15 66.4C325.883 67.8 323.383 68.5 320.65 68.5C311.05 68.5 306.25 63.8333 306.25 54.5V44.5C306.25 35.1667 311.05 30.5 320.65 30.5H332.25V14.1C332.25 11.7 331.483 9.83333 329.95 8.5C328.417 7.16667 326.15 6.5 323.15 6.5C317.217 6.5 314.25 9.03333 314.25 14.1V20H307.25V14.5C307.25 10.0333 308.55 6.6 311.15 4.2C313.817 1.73333 317.817 0.5 323.15 0.5C328.483 0.5 332.483 1.73333 335.15 4.2C337.883 6.6 339.25 10.0333 339.25 14.5V67ZM332.25 36.5H320.65C317.85 36.5 315.917 37.2 314.85 38.6C313.783 40 313.25 41.9667 313.25 44.5V54.5C313.25 57.0333 313.783 59 314.85 60.4C315.917 61.8 317.85 62.5 320.65 62.5C323.45 62.5 326.05 61.4333 328.45 59.3C330.85 57.1 332.117 54.9333 332.25 52.8V36.5Z" />
        <path d="M390.05 54.5C390.05 63.8333 384.417 68.5 373.15 68.5C361.883 68.5 356.25 63.8333 356.25 54.5V46H363.25V54.9C363.25 57.3 364.083 59.1667 365.75 60.5C367.417 61.8333 369.883 62.5 373.15 62.5C376.417 62.5 378.883 61.8333 380.55 60.5C382.217 59.1667 383.05 57.3667 383.05 55.1C383.05 52.7667 382.783 50.9333 382.25 49.6C381.783 48.2 380.783 46.7333 379.25 45.2L361.65 28C359.583 25.9333 358.15 23.9333 357.35 22C356.617 20 356.25 17.5 356.25 14.5C356.25 10.0333 357.617 6.6 360.35 4.2C363.15 1.73333 367.35 0.5 372.95 0.5C383.683 0.5 389.05 5.16667 389.05 14.5V23H382.05V14.1C382.05 11.7 381.25 9.83333 379.65 8.5C378.117 7.16667 375.783 6.5 372.65 6.5C369.517 6.5 367.15 7.16667 365.55 8.5C364.017 9.83333 363.25 11.6667 363.25 14C363.25 16.3333 363.483 18.1667 363.95 19.5C364.417 20.8333 365.45 22.2333 367.05 23.7L384.95 40.9C386.883 43.0333 388.217 45.1 388.95 47.1C389.683 49.0333 390.05 51.5 390.05 54.5Z" />
      </g>
    </svg>
  );
};