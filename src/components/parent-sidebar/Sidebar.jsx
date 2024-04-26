
import { useRef, useState } from "react";
import arrowDown from '../../assets/arrow-down.svg'
import styles from './styles.module.css'
import { Link } from "react-router-dom";
import { menuItems } from "../constant/constant";

const Icon = ({ icon }) => (
  <img src={icon} className={styles.materials} alt="" />
);


const NavButton = ({ onClick, name, icon, path, isActive, hasSubNav }) => (
  <Link to={path}>
    <button
      type="button"
      onClick={() => onClick(name)}
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
    >
      {icon && <Icon icon={icon} />}
      <span>{name}</span>
      {hasSubNav && <Icon icon={arrowDown} />}
    </button>
  </Link>
);


const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);
  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`${styles.subNav} ${isSubNavOpen(item.name, item.items) ? styles.open : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className={styles.subNavInner}>
        {item?.items.map((subItem) => (
          <NavButton
            onClick={handleClick}
            name={subItem.name}
            path={subItem.path}
            isActive={activeItem === subItem}
            key={subItem.name}
          />
        ))}
      </div>
    </div>
  );
};
export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className={styles.sidebar}>
      {/* <NavHeader /> */}
      {menuItems.map((item) => (
        <div>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              path={item.path}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                path={item.path}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}

    </aside>
  );
};