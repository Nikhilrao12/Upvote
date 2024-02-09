import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Upvotec } from "../../contexts/Context";

const Upvote = () => {
  const { items, setItems } = useContext(Upvotec);

  const listofItem = (key) => {
    setItems((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], false],
    }));
  };

  return (
    <div className={styles.maindiv}>
      {Object.entries(items).map(([key, value]) => (
        <div key={key} className={styles.dinlineflex}>
          <ul className={styles.list_inline} key={key}>
            {value.map((itemval, index) => (
              <li
                data-testid={`${key}-list-item-${index}`}
                key={index}
                className={styles.listinlineitem}
                style={{
                  backgroundColor: items[key][index] ? "#E5E8FD" : "#F4f6F8",
                  borderRadius: "7px",
                }}
                onClick={() => {
                  setItems((prevState) => {
                    const updatedItems = {
                      ...prevState,
                      [key]: prevState[key].map((item, i) =>
                        i === index ? !item : item
                      ),
                    };
                    return updatedItems;
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  color={items[key][index] ? "blue" : "black"}
                  className="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                  />
                </svg>
              </li>
            ))}
          </ul>
          <div className={styles.button_c}>
            <p onClick={() => listofItem(key)} data-testid={`${key}-add`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upvote;
