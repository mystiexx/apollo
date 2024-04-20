import * as React from "react";
import { colors } from "../utils/colors";

const SvgBackground = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1440}
        height={768}
        fill="none"
        {...props}
    >
        <mask
            id="b"
            width={1440}
            height={1080}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="url(#a)" d="M0 0h1440v1080H0z" />
        </mask>
        <g mask="url(#b)">
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M0 1h144v144H0zM144 1h144v144H144zM288 1h144v144H288zM432 1h144v144H432zM576 1h144v144H576zM720 1h144v144H720zM864 1h144v144H864zM1008 1h144v144h-144zM1152 1h144v144h-144z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M1296 1h144v144h-144z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M0 145h144v144H0zM144 145h144v144H144zM288 145h144v144H288z"
            />
            <path
                fill={colors.dark}
                stroke={colors.primary}
                strokeWidth={0.5}
                d="M432 145h144v144H432z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M576 145h144v144H576zM720 145h144v144H720zM864 145h144v144H864zM1008 145h144v144h-144zM1152 145h144v144h-144zM1296 145h144v144h-144zM0 289h144v144H0z"
            />
            <path
                fill={colors.dark}
                stroke={colors.primary}
                strokeWidth={0.5}
                d="M144 289h144v144H144z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M288 289h144v144H288zM432 289h144v144H432zM576 289h144v144H576zM720 289h144v144H720zM864 289h144v144H864z"
            />
            <path
                fill={colors.dark}
                stroke={colors.primary}
                strokeWidth={0.5}
                d="M1008 289h144v144h-144z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M1152 289h144v144h-144zM1296 289h144v144h-144zM0 433h144v144H0zM144 433h144v144H144zM288 433h144v144H288zM432 433h144v144H432z"
            />
            <path
                fill={colors.dark}
                stroke={colors.primary}
                strokeWidth={0.5}
                d="M576 433h144v144H576z"
            />
            <path
                fill={colors.dark}
                stroke={colors.light}
                strokeWidth={0.5}
                d="M720 433h144v144H720zM864 433h144v144H864zM1008 433h144v144h-144zM1152 433h144v144h-144zM1296 433h144v144h-144zM0 577h144v144H0zM144 577h144v144H144zM288 577h144v144H288zM432 577h144v144H432zM576 577h144v144H576zM720 577h144v144H720zM864 577h144v144H864zM1008 577h144v144h-144zM1152 577h144v144h-144zM1296 577h144v144h-144zM0 721h144v144H0zM144 721h144v144H144zM288 721h144v144H288zM432 721h144v144H432zM576 721h144v144H576zM720 721h144v144H720zM864 721h144v144H864zM1008 721h144v144h-144zM1152 721h144v144h-144zM1296 721h144v144h-144z"
            />
            <path stroke="url(#c)" d="M355 431.5h133" />
            <path stroke="url(#d)" d="M390 575.5h133" />
            <path stroke="url(#e)" d="M608 142.5h133" />
            <path stroke="url(#f)" d="M863.5 562V429" />
            <path stroke="url(#g)" d="M1008.5 256V123" />
            <path stroke="url(#h)" d="M719.5 198V65" />
            <path stroke="url(#i)" d="M863.5 696V563" />
        </g>
        <defs>
            <linearGradient
                id="c"
                x1={489}
                x2={355}
                y1={432.5}
                y2={432}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="d"
                x1={524}
                x2={390}
                y1={576.5}
                y2={576}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="e"
                x1={742}
                x2={608}
                y1={143.5}
                y2={143}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="f"
                x1={864.5}
                x2={864}
                y1={428}
                y2={562}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="g"
                x1={1009.5}
                x2={1009}
                y1={122}
                y2={256}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="h"
                x1={720.5}
                x2={720}
                y1={64}
                y2={198}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="i"
                x1={864.5}
                x2={864}
                y1={562}
                y2={696}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="i"
                x1={864.5}
                x2={864}
                y1={562}
                y2={696}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopOpacity={0.537} />
                <stop stopColor="#3F12C4" stopOpacity={0} />
                <stop offset={0.536} stopColor="#3F12C4" />
                <stop offset={1} stopColor="#3F12C4" stopOpacity={0} />
            </linearGradient>
            <radialGradient
                id="a"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(0 608 -868.558 0 720 380)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.229} stopColor="#220C0C" stopOpacity={0} />
                <stop offset={0.729} stopColor="#220C0C" />
            </radialGradient>
        </defs>
    </svg>
);
export default SvgBackground;