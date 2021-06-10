const Navbar = () => {
  return (
    <nav>
      <a href="/home">Home</a>
      <a href="/userposts/:userid">userpost</a>
      <a href="/posts/:id">posts</a>
    </nav>
  );
};

export default Navbar;
