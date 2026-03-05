import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * TODO: Mantén el componente reutilizable
 * No uses tamaños fijps innecesarios. Usa padding, borderRadius y tipografía
 */

export default function StatCard({ label, value, hint }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.hint}>{hint}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 18,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ECECF3",
        padding: 16,
        gap: 6,
    },
    label: { fontSize: 12, opacity: 0.65 },
    value: { fontSize: 22, fontWeight: "800" },
    hint: { fontSize: 12, opacity: 0.55 },
});