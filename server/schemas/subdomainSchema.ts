import { z } from "zod";

export const subdomainSchema = z
    .string()
    .regex(
        /^(?!:\/\/)(?:\*|[a-zA-Z0-9-_]+)(?:\.[a-zA-Z0-9-_]+)*$/,
        "Invalid subdomain format. Wildcards (*) are only allowed at the top level."
    )
    .min(1, "Subdomain must be at least 1 character long")
    .transform((val) => val.toLowerCase());