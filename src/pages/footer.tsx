export const Footer = () => {
    return (
      <footer
        style={{
          marginTop: '4rem',
          padding: '3rem',
          backgroundColor: '#ffffff',
          textAlign: 'center',
          fontSize: '1 rem',
          boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.05)'
        }}
      >
        © {new Date().getFullYear()} Новостной блог
      </footer>
    );
  };