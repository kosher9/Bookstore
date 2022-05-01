import React from 'react';

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  );
}
