import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
    title: string; // (e.g., "修改個人訊息")
    text: string; // 右上角按鈕
    navigation: any; 
    Change: () => void; //右上角按鈕
}
export const Header: React.FC<HeaderProps> = ({ title, text, navigation, Change}) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={28} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={Change}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
};
  
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        color: "#007bff",
        fontSize: 16,
    },
});