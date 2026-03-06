import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

/**
 * TODO: Personaliza el texto con el nombre del equipo si deseas.
 * TODO: El botón debe navegar a "AdaptiveDashboard".
 */

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.title}>Diseño adaptativo</Text>
                <Text style={styles.subtitle}>
                    Las chicas superpoderosas necesitan una app que se vea bien tanto en móviles como en tablets.
                    En este ejercicio vamos a crear un dashboard adaptativo que cambia su layout según el tamaño de pantalla.
                </Text>

                <Pressable
                    style={styles.cta}
                    onPress={() => navigation.navigate("AdaptiveDashboard")}>
                    <Text style={styles.ctaText}>
                        Ir al ejercicio
                    </Text>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    TODO: Prueba en portrait vs landscape o cambia el tamaño del emulador /web
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
        backgroundColor: "#F7F7FB"
    },
    hero:
    {
        padding: 18,
        borderRadius: 18,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ECECF3",
        gap: 10,
    },
    title: { fontSize: 26, fontWeight: "800" },
    subtitle: { fontSize: 13, lineHeight: 18, opacity: 0.8 },
    cta: {
        marginTop: 10,
        paddingVertical: 14,
        borderRadius: 14,
        backgroundColor: "#111827",
        alignItems: "center",
    },
    ctaText: { color: "white", fontWeight: "700" },
    footer: { padding: 10 },
    footerText: { fontSize: 12, opacity: 0.6 },
}
);
