import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setShowOptions(false);
  };

  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
        <Text>{selectedOption || "Select an option"}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View
          style={{
            position: "absolute",
            top: 20,
            left: 0,
            right: 0,
            backgroundColor: "white",
            zIndex: 2,
          }}
        >
          {options.map((option) => (
            <TouchableOpacity key={option} onPress={() => handleSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
