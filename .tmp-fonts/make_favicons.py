"""Generate ORVIX premium circular 'O' favicon assets."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONT_PATH = Path(__file__).resolve().parent / "CormorantGaramond.ttf"

GOLD = (185, 152, 90, 255)  # #B9985A
WHITE = (255, 255, 255, 255)


def load_font(size: float) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONT_PATH), size=size)
    # Prefer Medium (500) when the variable font exposes a weight axis.
    try:
        axes = font.get_variation_axes()
        names = [a.get("name", "").lower() for a in axes]
        if any("wght" in n or "weight" in n for n in names):
            values = []
            for axis in axes:
                name = axis.get("name", "").lower()
                if "wght" in name or "weight" in name:
                    minimum = axis.get("minimum", 400)
                    maximum = axis.get("maximum", 700)
                    values.append(max(minimum, min(500, maximum)))
                else:
                    values.append(axis.get("default", axis.get("minimum", 0)))
            font.set_variation_by_axes(values)
    except Exception:
        pass
    return font


def render_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Full-bleed circle — reads clearly at 16px.
    draw.ellipse((0, 0, size - 1, size - 1), fill=GOLD)

    # Scale letter generously; tiny inset keeps serifs inside the circle.
    font_size = size * 0.72
    font = load_font(font_size)
    letter = "O"

    bbox = draw.textbbox((0, 0), letter, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    # Optical vertical center for serif capitals (slight lift).
    y = (size - text_h) / 2 - bbox[1] - size * 0.02
    draw.text((x, y), letter, font=font, fill=WHITE)
    return img


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)

    sizes = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "apple-touch-icon.png": 180,
    }
    for name, size in sizes.items():
        render_icon(size).save(PUBLIC / name, format="PNG", optimize=True)
        print(f"wrote {name}")

    # Multi-resolution ICO for broad browser support.
    ico_path = PUBLIC / "favicon.ico"
    render_icon(256).save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print(f"wrote {ico_path.name}")


if __name__ == "__main__":
    main()
