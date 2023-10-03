type Props = {
  size?: 'lg' | 'md'
};

const LoadingSpinner = (props: Props) => {
  return (
    <svg width={props.size === 'lg' ? "24" : "20"} height={props.size === 'lg' ? "24" : "20"} viewBox={props.size === 'lg' ? "0 0 24 24" : "0 0 20 20"} fill="none" xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <mask id="path-1-inside-1_85_587" fill="white">
        <path d="M20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10ZM2.5 10C2.5 14.4183 6.08172 18 10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10Z" />
      </mask>
      <path d="M20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10ZM2.5 10C2.5 14.4183 6.08172 18 10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10Z" fill="white" stroke="white" stroke-width="2" mask="url(#path-1-inside-1_85_587)" />
      <mask id="path-2-inside-2_85_587" fill="white">
        <path d="M19.5 10C20.0523 10 20.5052 10.4489 20.4501 10.9984C20.254 12.9527 19.4855 14.8142 18.2301 16.3439C16.7624 18.1323 14.72 19.3565 12.4509 19.8079C10.1818 20.2592 7.8264 19.9098 5.78603 18.8192C3.74566 17.7286 2.14656 15.9643 1.2612 13.8268C0.375846 11.6894 0.259008 9.31109 0.930596 7.09715C1.60219 4.88322 3.02065 2.97065 4.9443 1.6853C6.86795 0.399963 9.17776 -0.178615 11.4802 0.0481526C13.4495 0.242116 15.3092 1.01501 16.8298 2.25828C17.2573 2.60787 17.2545 3.24551 16.864 3.63604C16.4734 4.02656 15.8436 4.02077 15.4074 3.68198C14.2209 2.76034 12.7927 2.1871 11.2841 2.03852C9.44221 1.85711 7.59436 2.31997 6.05544 3.34824C4.51652 4.37652 3.38175 5.90658 2.84448 7.67772C2.30721 9.44887 2.40068 11.3515 3.10896 13.0615C3.81725 14.7714 5.09653 16.1829 6.72883 17.0554C8.36112 17.9279 10.2454 18.2074 12.0607 17.8463C13.876 17.4852 15.5099 16.5059 16.6841 15.0751C17.6458 13.9034 18.2503 12.4881 18.4376 10.9974C18.5064 10.4495 18.9477 10 19.5 10Z" />
      </mask>
      <path d="M19.5 10C20.0523 10 20.5052 10.4489 20.4501 10.9984C20.254 12.9527 19.4855 14.8142 18.2301 16.3439C16.7624 18.1323 14.72 19.3565 12.4509 19.8079C10.1818 20.2592 7.8264 19.9098 5.78603 18.8192C3.74566 17.7286 2.14656 15.9643 1.2612 13.8268C0.375846 11.6894 0.259008 9.31109 0.930596 7.09715C1.60219 4.88322 3.02065 2.97065 4.9443 1.6853C6.86795 0.399963 9.17776 -0.178615 11.4802 0.0481526C13.4495 0.242116 15.3092 1.01501 16.8298 2.25828C17.2573 2.60787 17.2545 3.24551 16.864 3.63604C16.4734 4.02656 15.8436 4.02077 15.4074 3.68198C14.2209 2.76034 12.7927 2.1871 11.2841 2.03852C9.44221 1.85711 7.59436 2.31997 6.05544 3.34824C4.51652 4.37652 3.38175 5.90658 2.84448 7.67772C2.30721 9.44887 2.40068 11.3515 3.10896 13.0615C3.81725 14.7714 5.09653 16.1829 6.72883 17.0554C8.36112 17.9279 10.2454 18.2074 12.0607 17.8463C13.876 17.4852 15.5099 16.5059 16.6841 15.0751C17.6458 13.9034 18.2503 12.4881 18.4376 10.9974C18.5064 10.4495 18.9477 10 19.5 10Z" fill="#98A2B3" stroke="#98A2B3" stroke-width="2" mask="url(#path-2-inside-2_85_587)" />
    </svg>


  );
};

export default LoadingSpinner;
