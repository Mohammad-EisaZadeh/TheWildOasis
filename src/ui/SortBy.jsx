import { useSearchParams } from "react-router-dom";
import Select from "../ui/Select";
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentsortBy = searchParams.get("SortBy") || "";
  function handleChange(e) {
    searchParams.set("SortBy", e.target.value);

    setSearchParams(searchParams);
  }
  return (
    <Select
      onChange={handleChange}
      options={options}
      type="white"
      value={currentsortBy}
    />
  );
}

export default SortBy;
