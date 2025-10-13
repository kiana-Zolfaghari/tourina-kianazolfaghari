import { Dropdown } from "primereact/dropdown";
import { cities } from "../../data/cities";
import styles from "./drop2.module.css";
function DropDown2({ destination, setDestination }) {
  const countries = cities;

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className={styles.dropcontainer}>
      <Dropdown
        value={destination}
        onChange={(e) => setDestination(e.value)}
        options={countries}
        optionLabel="name"
        placeholder="مقصد"
        filter
        filterDelay={400}
        dir="trl"
        appendTo="self"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        className={styles.customDropdown}
        pt={{
          panel: { className: styles.dropdownPanel },
          item: { className: styles.dropdownItem },
          filterInput: { className: styles.dropdownFilter },
        }}
      />
    </div>
  );
}

export default DropDown2;
