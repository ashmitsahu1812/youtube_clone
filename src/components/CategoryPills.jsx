import React from 'react';

const myCategories = ['All', 'Music', 'Mixes', 'News', 'Gaming', 'Podcasts'];

export default function CategoryPills(props) {
  return (
    <div className="category-pills">
      {myCategories.map(function(cat, i) {
        
        let btnClass = "pill";
        if (props.selectedCategory === cat) {
          btnClass = btnClass + " active";
        }

        return (
          <button
            key={i}
            className={btnClass}
            onClick={function() {
              props.onSelectCategory(cat);
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
