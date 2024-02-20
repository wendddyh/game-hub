import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props{
  onSelectSortOrder: (sortOrder: string) => void ;
  sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const sortingOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by : {sortingOrder?.label || ' Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((selector) => (
          <MenuItem onClick={() => onSelectSortOrder(selector.value)} key={selector.value}>{selector.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
