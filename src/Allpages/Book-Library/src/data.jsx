import React from 'react';
import Books from './Books';

const fictionBooks = [
  { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSX19y28-klVcRCDk1KH7TwLLMZI-al-ssL7vWrmLA3qQlRPjA0', title: 'To Kill a Mockingbird', price: '765' },
  { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf', title: 'Pride and Prejudice', price: '203' },
  { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMzFauFHVQTkklojHoIspzFxRzx_G-p5VgKg-XhmCiwUz2wnq1', title: 'The Great Gatsby', price: '357' },
  { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjiC5auev5fGmYTE6-4SrEYCTMuoU3kCidaChxYd2cHAkvoYXE', title: 'A Man Called Ove', price: '357' }
];

const nonFictionBooks = [
  { image: 'https://notionpress.com/thumbs/phpThumb.php?src=https://notionpress.com/coveruploads/1989982966resize_cover_471942.png&f=webp&h=600', title: 'Connections Unleashed', price: '765' },
  { image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/In_Cold_Blood-Truman_Capote.jpg', title: 'In Cold Blood', price: '502' },
  { image: 'https://mpd-biblio-covers.imgix.net/9780374500016.jpg?w=300', title: 'Night', price: '321' },
  { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFVkjtf6kheEEgfsuFGX0yE5Dl-TkKBznYU0w-JHMmfIl_6j18', title: 'The Diary of a Young Girl', price: '321' }
];

const fantasyBooks = [
  { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRE6r9PS-LWAL9BLF_CEuWDF6pWlzMr6wH5KM_-PplALg297f2A', title: 'Game of Thrones', price: '682' },
  { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrIY5P5N3wTEYm2ZNfD0Ss9euKyePvh646PBRF8FEp7WZzHySI', title: 'The title of the Wind', price: '482' },
  { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDQA4AEHBp5DKrQS5jAAAkLDSGXnTfFfD1hvyLL1BI6dztwzib', title: 'The Lord of the Rings', price: '258' },
  { image: 'https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103283.jpg', title: 'The Hobbit', price: '369' }
];

const loveBooks = [
    { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf', title: 'Pride and Prejudice', price: '582' },
    { image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfxjtBH7mqNcP4K7PsnCA_eKVkx_uoTVcRMVzYvUTA99pjmugY', title: 'Outlander', price: '482' },
    { image: 'https://i.insider.com/6080333074da0300181e2ee4?width=800&format=jpeg&auto=webp', title: 'The Kiss Quotient', price: '258' },
    { image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8cVlhZPFAJ-ldLOSrUrW6Tc2DcGoX4lib6Fiae4oy01T1viwE', title: 'The Notebook', price: '448' }
  ];

const Data = () => {
  return (
    <div>
      <Books genre="Fiction" books={fictionBooks} />
      <Books genre="Non-Fiction" books={nonFictionBooks} />
      <Books genre="Fantasy" books={fantasyBooks} />
      <Books genre="Love" books={loveBooks} />
    </div>
  );
};

export default Data;