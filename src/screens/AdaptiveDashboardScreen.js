import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, FlatList, Pressable } from "react-native";
import StatCard from "../components/StatCard";
import { stats } from "../data/stats";
import { getLayoutMode } from "../utils/layout";

export default function AdaptiveDashboardScreen() {
    const { width, height } = useWindowDimensions();

    // 1) Modo de layout (mobile/tablet) basado en breakpoint
    const mode = getLayoutMode(width);
    const isTablet = mode === "tablet";

    // 2) Cambio estructural REAL: cantidad de columnas cambia
    const numColumns = isTablet ? 2 : 1;

    return (
        <View style={styles.page}>
            <View style={[styles.wrapper, isTablet ? styles.wrapperTablet : styles.wrapperMobile]}>
                {/*Header*/}
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Dashboard</Text>
                        <Text style={styles.subtitle}>
                            Ancho: {Math.round(width)}px | Alto: {Math.round(height)}px | modo: {mode} | columnas: {numColumns}
                        </Text>
                    </View>

                    <Pressable style={styles.badge}>
                        <Text style={styles.badgeText}>{isTablet ? "Tablet UI" : "Mobile UI"}</Text>
                    </Pressable>
                </View>

                {/*
                TODO: FlatList adaptativa
                - Usar numColumns = {numColumns}
                - Usar key = {numColumns} para que al cambiar columnas se re-renderice el layouth correctamente
                - KeyExtractor estable con item.id
                - ColumnWrapperStyle solo cuado numColumns > 1
                 */}
                <FlatList
                    data={stats}
                    key={numColumns}
                    numColumns={numColumns}
                    keyExtractor={(item) => String(item.id)}
                    columnWrapperStyle={isTablet ? styles.columnWrapper : null}
                    contentContainerStyle={{ paddingTop: 12, paddingBottom: 12 }}
                    renderItem={({ item }) => (
                        <View style={[styles.cardWrap, isTablet ? styles.cardWrapTablet : styles.cardWrapMobile]}>
                            <StatCard label={item.label} value={item.value} hint={item.hint} />
                        </View>
                    )}
                />

                {/**CTA inferior */}
                <Pressable style={[styles.cta, isTablet ? styles.ctaTablet : styles.ctaMobile]} onPress={() => { }}>
                    <Text style={styles.ctaText}>Accion principal</Text>
                    <Text style={styles.ctaHint}>TODO: esto es solo visual, no necesita lógica hoy</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: "#F7F7FB", padding: 16, alignItems: "center" },
    wrapper: {
        width: "100%",
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#ECECF3",
        padding: 16,
    },
    wrapperMobile: { maxWidth: 520 },
    wrapperTablet: { maxWidth: 900 },

    header: { flexDirection: "row", alignItems: "center", gap: 12 },
    title: { fontSize: 24, fontWeight: "900" },
    subtitle: { fontSize: 12, opacity: 0.65, marginTop: 4 },

    badge: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999, backgroundColor: "#111827" },
    badgeText: { color: "white", fontWeight: "700", fontSize: 12 },

    columnWrapper: { gap: 12 },
    cardWrap: { paddingVertical: 8 },
    cardWrapMobile: { width: "100%" },
    cardWrapTablet: { flex: 1 },
    cta: {
        marginTop: 8,
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#111827",
        alignItems: "center",
        gap: 2,
    },

    ctaMobile: { width: "100%" },
    ctaTablet: { width: "60%", alignSelf: "center" },
    ctaText: { color: "white", fontWeight: "800", fontSize: 14 },
    ctaHint: { color: "white", opacity: 0.75, fontSize: 12, },
}
);