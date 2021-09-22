import React from "react";

function BreadCrumb(props) {
  const { data } = props;

  return (
    <div className="breadcrumb__container">
      {data.categories.map((element, id) => {
        return (
          <React.Fragment>
            <div key={id}>{element}</div>
            <div  key={id} className="breadcrumb__separator">&nbsp;&gt;&nbsp;</div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BreadCrumb;
