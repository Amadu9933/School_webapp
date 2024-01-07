import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div className="">
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						<span className="text-gray-300 text-xs">2th, January 2023.</span>
						<br />
						GSTEP Pregram
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>
						I am an accordion Nulla facilisi. Phasellus sollicitudin nulla et
						Nulla facilisi. Phasellus heloo jaargfh........
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
						Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						<span className="text-gray-300 text-xs">2th, January 2023.</span>
						<br />
						GSTEP Pregram
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>
						I am an accordion Nulla facilisi. Phasellus sollicitudin nulla et
						Nulla facilisi. Phasellus heloo jaargfh........
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
						Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						<span className="text-gray-300 text-xs">2th, January 2023.</span>
						<br />
						GSTEP Pregram
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>
						I am an accordion Nulla facilisi. Phasellus sollicitudin nulla et
						Nulla facilisi. Phasellus heloo jaargfh........
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
						Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						<span className="text-gray-300 text-xs">2th, January 2023.</span>
						<br />
						GSTEP Pregram
					</Typography>
					<Typography sx={{ color: "text.secondary" }}>
						I am an accordion Nulla facilisi. Phasellus sollicitudin nulla et
						Nulla facilisi. Phasellus heloo jaargfh........
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
						Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat Nulla facilisi.
						Phasellus sollicitudin nulla et quam mattis feugiat
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
