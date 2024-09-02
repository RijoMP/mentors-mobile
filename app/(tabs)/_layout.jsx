import { Image, ImageBackground, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const screens = [
  {
    name: "assessments",
    title: "Action",
    icon: icons.profile,
  },
  {
    name: "classes",
    title: "Classes",
    icon: icons.plus,
  },
  {
    name: "home",
    title: "Home",
    icon: icons.home,
  },
  {
    name: "bookmarks",
    title: "Saved",
    icon: icons.bookmark,
  },
  {
    name: "forum",
    title: "Forum",
    icon: icons.play,
  },
];

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center w-16 h-16 max-w-1">
      <ImageBackground
        source={icon}
        resizeMode="contain"
        resizeMethod="resize"
        tintColor={color}
        className={`${focused ? "w-8 h-8 -translate-y-1" : "w-6 h-6"}`}
      ></ImageBackground>
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: "#70637e" }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#863592",
          tabBarInactiveTintColor: "#70637e",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "transparent",
            borderRadius: 25,
            marginBottom: 10,
            marginHorizontal: 5,
            height: 70,
            transition: "all 0.9s ease-in-out",
            overflow: "visible",
          },
        }}
        className="border-2"
      >
        {screens.map((screen) => (
          <Tabs.Screen
            key={screen.name}
            name={screen.name}
            options={{
              title: screen.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={screen.icon}
                  color={color}
                  name={screen.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
