import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './MultiSelectDropdown.css';

const MultiSelectDropdown = ({
  options = [],
  multiple = true,
  outlined = false,
  optionLabel = '',
  filtering = true,
  usePortal = false,
  placeholder = 'Select...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownCoords, setDropdownCoords] = useState(null);

  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prevOpen) => {
      const nextOpen = !prevOpen;

      if (nextOpen && headerRef.current) {
        // Calculate dropdown position for portal usage
        const rect = headerRef.current.getBoundingClientRect();
        setDropdownCoords({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      } else {
        setDropdownCoords(null);
      }

      return nextOpen;
    });
  };

  // Extract label for an option
  const getOptionLabel = (option) => {
    if (typeof option === 'string') return option;
    if (option && typeof option === 'object') {
      if (optionLabel && option[optionLabel] !== undefined && option[optionLabel] !== null) {
        return option[optionLabel];
      }
      // Fallback if optionLabel prop is incorrect
      return option.name || option.label || JSON.stringify(option);
    }
    return '';
  };  

  // Handle option click, supporting single and multiple modes
  const handleOptionClick = (option) => {
    if (multiple) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions((prev) => prev.filter((item) => item !== option));
      } else {
        setSelectedOptions((prev) => [...prev, option]);
      }
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions([option]);
        setIsOpen(false);
      }
    }
  };

  // Remove a selected tag
  const handleRemove = (option) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  // Filter options based on search term
  const searchMatch = (option) =>
    getOptionLabel(option).toLowerCase().includes(searchTerm.toLowerCase());

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      headerRef.current &&
      !headerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Highlight matching search text
  const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(
      `(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`,
      'gi'
    );
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          style={{ backgroundColor: '#95dfdd', color: '#333', borderRadius: 2 }}
        >
          {part}
        </mark>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  // Filtered options based on search
  const displayedOptions = filtering
    ? options.filter(searchMatch)
    : options;

  // Fix keys for options - use JSON.stringify only as last resort
  const getOptionKey = (option, index) => {
    if (typeof option === 'string') return option;
    if (option && option.id !== undefined) return option.id;
    if (option && option.name) return option.name;
    return `option-${index}`;
  };

  // Render dropdown with optional portal positioning
  const renderDropdownBody = () => (
    <div
      className="dropdown-body"
      style={
        usePortal && dropdownCoords
          ? {
              position: 'absolute',
              top: `${dropdownCoords.top}px`,
              left: `${dropdownCoords.left}px`,
              width: `${dropdownCoords.width}px`,
              zIndex: 9999,
            }
          : {}
      }
      ref={dropdownRef}
      role="listbox"
      aria-multiselectable={multiple}
      tabIndex={-1}
    >
      {filtering && (
        <div className="search-container">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            aria-label="Search options"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoFocus
            placeholder="Search..."
          />
        </div>
      )}

      {displayedOptions.length === 0 ? (
        <div className="no-options" aria-live="polite">
          No options found
        </div>
      ) : (
        displayedOptions.map((option, index) => {
          const label = getOptionLabel(option);
          const isSelected = selectedOptions.includes(option);
          return (
            <div
              key={getOptionKey(option, index)}
              className={`option-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOptionClick(option);
                }
              }}
            >
              {highlightMatch(label, filtering ? searchTerm : '')}
            </div>
          );
        })
      )}
    </div>
  );

  return (
    <div
      className={`multi-select-dropdown-wrapper ${outlined ? 'outlined' : ''}`}
    >
      {optionLabel && (
        <label
          className="dropdown-label"
          htmlFor="multi-select-dropdown-header"
        >
          {optionLabel}
        </label>
      )}

      <div
        className={`multi-select-dropdown ${outlined ? 'outlined' : ''}`}
        ref={dropdownRef}
      >
        {/* Dropdown Header */}
        <div
          id="multi-select-dropdown-header"
          className="dropdown-header"
          onClick={toggleDropdown}
          ref={headerRef}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDropdown();
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
        >
          {selectedOptions.length === 0 ? (
            <span className="placeholder-text" style={{ color: '#aaa' }}>
              {placeholder}
            </span>
          ) : (
            selectedOptions.map((option) => (
              <span
                key={getOptionLabel(option)}
                className="selected-tag"
                title={getOptionLabel(option)}
              >
                {getOptionLabel(option)}
                {multiple && (
                  <button
                    aria-label={`Remove ${getOptionLabel(option)}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(option);
                    }}
                  >
                    ×
                  </button>
                )}
              </span>
            ))
          )}

          <span className="dropdown-arrow" aria-hidden="true">
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {/* Dropdown Body */}
        {isOpen &&
          (usePortal
            ? ReactDOM.createPortal(renderDropdownBody(), document.body)
            : renderDropdownBody())}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
