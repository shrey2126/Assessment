const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    menu: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    ),
    close: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ),
    home: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    mail: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
    clock: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    arrow: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    ),
    chevronDown: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    ),
    chevronRight: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    ),
    facebook: (
      <path
        fill="currentColor"
        d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.18 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.198 2.238.198v2.475h-1.26c-1.242 0-1.63.776-1.63 1.572v1.887h2.773l-.443 2.91h-2.33V22c4.78-.76 8.437-4.92 8.437-9.94Z"
      />
    ),
    instagram: (
      <>
        <path
          fill="currentColor"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z"
        />
        <path
          fill="currentColor"
          d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        />
      </>
    ),
    pinterest: (
      <path
        fill="currentColor"
        d="M12.02 2C6.49 2 2 6.213 2 11.664c0 4.182 2.688 7.78 6.49 9.15-.09-.776-.172-1.968.036-2.816.188-.766 1.21-4.88 1.21-4.88s-.308-.614-.308-1.52c0-1.426.842-2.492 1.89-2.492.89 0 1.32.656 1.32 1.443 0 .88-.575 2.196-.87 3.417-.246 1.024.53 1.858 1.57 1.858 1.885 0 3.334-1.932 3.334-4.72 0-2.465-1.812-4.19-4.4-4.19-2.995 0-4.757 2.194-4.757 4.46 0 .88.345 1.824.777 2.336a.3.3 0 0 1 .07.29c-.078.316-.254 1.024-.288 1.164-.045.186-.147.226-.34.136-1.27-.58-2.06-2.394-2.06-3.854 0-3.14 2.34-6.03 6.74-6.03 3.54 0 6.29 2.47 6.29 5.77 0 3.44-2.21 6.21-5.28 6.21-1.03 0-2-.52-2.33-1.13l-.63 2.34c-.23.85-.85 1.91-1.27 2.56.95.285 1.96.44 3.01.44 5.53 0 10.02-4.213 10.02-9.664C22.04 6.213 17.55 2 12.02 2Z"
      />
    ),
  };

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
